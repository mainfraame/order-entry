module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        [
            'babel-plugin-import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
            },
            'antd'
        ],
        [
            'babel-plugin-import',
            {
                libraryName: '@jbuschke/formik-antd',
                libraryDirectory: 'es',
                camel2DashComponentName: false,
                style: (name) => {

                    const component = name.split('/').pop().split(/(?=[A-Z])/)
                        .map((word) => word.toLowerCase()).join('-');

                    return !name.includes('SubmitButton') && !name.includes('ResetButton') &&
                        `antd/es/${component}/style/index.less`;
                },
                transformToDefaultImport: false
            },
            '@jbuschke/formik-antd'
        ],
        [
            'transform-react-remove-prop-types',
            {
                mode: 'wrap'
            }
        ]
    ]
};
