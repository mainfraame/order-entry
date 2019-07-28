import React, { useCallback, useMemo } from 'react';
import { Alert, Button, Col, PageHeader, Row } from 'antd';
import { Form, Input, ResetButton, Select, SubmitButton } from '@jbuschke/formik-antd';
import { Formik } from 'formik';
import * as Yup from 'yup';

import ActionInput from '../Inputs/ActionInput';
import NumberInput from '../Inputs/NumberInput';
import SymbolInput, { symbolDataSource } from '../Inputs/SymbolInput';

import useLayoutState from '../../hooks/useLayoutState';
import useOrderEntryActions from '../../hooks/useOrderEntryActions';
import useOrderEntryState from '../../hooks/useOrderEntryState';

export default React.memo(() => {

    const {addEntry, setIsLoading} = useOrderEntryActions();

    const {rowData} = useOrderEntryState();
    const {orientation} = useLayoutState();

    const isVertical = orientation === 'vertical';

    const formItemLayout = useMemo(
        () => (
            isVertical ?
                {
                    labelCol: {
                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 10
                        },
                        md: {
                            span: 8
                        }
                    },
                    wrapperCol: {

                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 14
                        },
                        md: {
                            span: 16
                        }
                    }
                } :
                {
                    layout: 'inline'
                }
        ),
        [
            isVertical
        ]
    );

    const buttonLayout = useMemo(
        () => (
            isVertical ? {
                wrapperCol: {
                    xs: {
                        span: 24
                    },
                    sm: {
                        span: 14,
                        offset: 10
                    },
                    md: {
                        span: 16,
                        offset: 8
                    }
                }
            } : null

        ),
        [
            isVertical
        ]
    );

    const initialValues = useMemo(
        () => ({
            action: 'Buy',
            symbol: '',
            qty: 0,
            price: 0,
            stopPrice: 0,
            orderType: 'Market',
            tif: 'DAY'
        }),
        []
    );

    const validation = useMemo(
        () => (
            Yup.object().shape({
                qty: Yup.number()
                    .min(1, 'Must be greater than 0')
                    .max(999, 'Must be less than 999')
                    .required('Required'),
                price: Yup.number()
                    .min(0.01, 'Must be greater than 0')
                    .required('Required'),
                stopPrice: Yup.number()
                    .min(0.01, 'Must be greater than 0')
                    .required('Required'),
                symbol: Yup.string()
                    .matches(new RegExp(symbolDataSource.join('|')), {
                        message: 'Must be a symbol within the list'
                    })
                    .required('Required')
            })),
        []
    );

    const onSubmit = useCallback(
        (order, api) => {

            setIsLoading(true);

            if ((rowData.length + 1) % 10 === 10) {

                api.setStatus({msg: 'Order time has elapsed'});
                api.setSubmitting(false);

                setIsLoading(false);

            } else {

                setTimeout(
                    (addEntry, setIsLoading, api, order) => {
                        addEntry(order);
                        setIsLoading(false);

                        api.resetForm();
                    },
                    2000,
                    addEntry, setIsLoading, api, order
                );
            }
        },
        [
            addEntry,
            rowData,
            setIsLoading
        ]
    );

    return (
        <>
            <PageHeader title='Order Entry'/>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validation}
                render={({status, values}) => (
                    <>
                        <Row>
                            <Form {...formItemLayout}>
                                <Form.Item label='Action'>
                                    <ActionInput
                                        name='action'
                                        value={values.action}/>
                                </Form.Item>
                                <Form.Item
                                    label='Symbol'
                                    name='symbol'
                                    hasFeedback
                                    required>
                                    <SymbolInput name='symbol'/>
                                </Form.Item>
                                <Form.Item
                                    label='Qty'
                                    name='qty'
                                    hasFeedback
                                    required>
                                    <NumberInput
                                        name='qty'
                                        precision={0}/>
                                </Form.Item>
                                <Form.Item
                                    label='Price'
                                    name='price'
                                    hasFeedback
                                    required>
                                    <NumberInput
                                        name='price'
                                        precision={2}
                                        prefix='$'/>
                                </Form.Item>
                                <Form.Item
                                    label='Stop Price'
                                    name='stopPrice'
                                    hasFeedback
                                    required>
                                    <NumberInput
                                        name='stopPrice'
                                        precision={2}
                                        prefix='$'/>
                                </Form.Item>
                                <Form.Item label='Order Type'>
                                    <Select
                                        name='orderType'>
                                        <Select.Option value='Limit'>Limit</Select.Option>
                                        <Select.Option value='Market'>Market</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label='TIF'>
                                    <Select
                                        name='tif'>
                                        <Select.Option value='DAY'>DAY</Select.Option>
                                        <Select.Option value='FOK'>FOK</Select.Option>
                                        <Select.Option value='GTC'>GTC</Select.Option>
                                        <Select.Option value='IOC'>IOC</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label='Comment'>
                                    <Input.TextArea
                                        autosize
                                        name='comment'/>
                                </Form.Item>
                                <Form.Item {...buttonLayout}>
                                    <Button.Group>
                                        <SubmitButton
                                            type='primary'>
                                            Submit
                                        </SubmitButton>
                                        <ResetButton>
                                            Reset
                                        </ResetButton>
                                    </Button.Group>
                                </Form.Item>
                            </Form>
                        </Row>
                        <Row>
                            {status &&
                            <Alert
                                description={status.msg}
                                closeText={<Button>Ok</Button>}
                                message='Error'
                                type='error'
                                showIcon/>}
                        </Row>
                    </>
                )}/>
        </>
    );
});