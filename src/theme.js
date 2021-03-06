const spacing = (n) => `${n * 8}px`;

module.exports = {

    presetColors: 'pink, magenta, red, volcano, orange, yellow, gold, cyan, lime, green, blue, geekblue, purple',
    antPrefix: 'ant',
    htmlSelector: 'html',

    primaryColor: '#475866',
    infoColor: '#1279B8',
    successColor: '#00A000',
    processingColor: '#0077bb',
    errorColor: '#B80000',
    highlightColor: '#D80000',
    warningColor: '#EF820D',
    normalColor: '#d9d9d9',

    white: '#fff',
    black: '#000',

    primary1: '#9ca3a6',
    primary2: '#909699',
    primary3: '#84898c',
    primary4: '#787d80',
    primary5: '#636c73',
    primary6: '#475866',
    primary7: '#293540',
    primary8: '#0f141a',
    primary9: '#000000',
    primary10: '#000000',

    bodyBackground: '#fff',
    componentBackground: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    codeFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    textColor: 'rgba(0, 0, 0, 0.65)',
    textColorSecondary: 'rgba(0, 0, 0, 0.45)',
    textColorInverse: '#fff',

    iconColor: 'inherit',
    iconColorHover: 'rgba(0, 0, 0, 0.75)',

    headingColor: '#475866',
    headingColorDark: '#ffffff',

    textColorDark: 'rgba(255, 255, 255, 0.85)',
    textColorSecondaryDark: 'rgba(255, 255, 255, 0.65)',
    textSelectionBg: '#475866',

    fontVariantBase: 'tabular-nums',
    fontFeatureSettingsBase: '"tnum"',
    fontSizeBase: '12px',
    fontSizeLg: '14px',
    fontSizeSm: '10px',

    heading1Size: '33px',
    heading2Size: '26px',
    heading3Size: '21px',
    heading4Size: '18px',

    lineHeightBase: '1.5',

    borderRadiusBase: '4px',
    borderRadiusSm: '2px',

    paddingLg: spacing(2),
    paddingMd: spacing(1.5),
    paddingSm: spacing(1),
    paddingXs: spacing(0.5),

    controlPaddingHorizontal: spacing(1),
    controlPaddingHorizontalSm: spacing(0.5),

    itemActiveBg: '#9ca3a6',
    itemHoverBg: '#9ca3a6',

    iconfontCssPrefix: 'anticon',

    linkColor: '#475866',
    linkHoverColor: '#636c73',
    linkActiveColor: '#293540',
    linkDecoration: 'none',
    linkHoverDecoration: 'none',

    easeBaseOut: 'cubic-bezier(0.7, 0.3, 0.1, 1)',
    easeBaseIn: 'cubic-bezier(0.9, 0, 0.3, 0.7)',
    easeOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    easeInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    easeInOutBack: 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
    easeOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
    easeInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',

    borderColorBase: '#d9d9d9',
    borderColorSplit: '#e8e8e8',
    borderColorInverse: '#fff',
    borderWidthBase: '1px',
    borderStyleBase: 'solid',

    outlineBlurSize: '0',
    outlineWidth: '2px',
    outlineColor: '#475866',

    backgroundColorLight: '#fafafa',
    backgroundColorBase: '#f5f5f5',

    disabledColor: 'rgba(0, 0, 0, 0.25)',
    disabledBg: '#f5f5f5',
    disabledColorDark: 'rgba(255, 255, 255, 0.35)',

    boxShadowBase: '0 2px 8px rgba(0, 0, 0, 0.15)',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowColorInverse: '#fff',
    shadow1Up: '0 -2px 8px rgba(0, 0, 0, 0.15)',
    shadow1Down: '0 2px 8px rgba(0, 0, 0, 0.15)',
    shadow1Left: '-2px 0 8px rgba(0, 0, 0, 0.15)',
    shadow1Right: '2px 0 8px rgba(0, 0, 0, 0.15)',
    shadow2: '0 4px 12px rgba(0, 0, 0, 0.15)',

    btnFontWeight: '400',
    btnBorderRadiusBase: '4px',
    btnBorderRadiusSm: '4px',
    btnBorderWidth: '1px',
    btnBorderStyle: 'solid',
    btnShadow: '0 2px 0 rgba(0, 0, 0, 0.015)',
    btnPrimaryShadow: '0 2px 0 rgba(0, 0, 0, 0.045)',
    btnTextShadow: '0 -1px 0 rgba(0, 0, 0, 0.12)',
    btnPrimaryColor: '#fff',
    btnPrimaryBg: '#475866',
    btnDefaultColor: 'rgba(0, 0, 0, 0.65)',
    btnDefaultBg: '#fff',
    btnDefaultBorder: '#d9d9d9',
    btnDangerColor: '#fff',
    btnDangerBg: '#c4251f',
    btnDangerBorder: '#c4251f',
    btnDisableColor: 'rgba(0, 0, 0, 0.25)',
    btnDisableBg: '#f5f5f5',
    btnDisableBorder: '#d9d9d9',
    btnPaddingBase: `0 ${spacing(2)}`,
    btnFontSizeLg: '14px',
    btnFontSizeSm: '12px',
    btnPaddingLg: `0 ${spacing(3)}`,
    btnPaddingSm: `0 ${spacing(2)}`,
    btnHeightBase: '32px',
    btnHeightLg: '40px',
    btnHeightSm: '24px',
    btnCircleSize: '32px',
    btnCircleSizeLg: '40px',
    btnCircleSizeSm: '24px',
    btnGroupBorder: '#636c73',

    checkboxSize: '16px',
    checkboxColor: '#475866',
    checkboxCheckColor: '#fff',
    checkboxBorderWidth: '1px',

    dropdownSelectedColor: '#475866',

    emptyFontSize: '12px',

    radioSize: '16px',
    radioDotColor: '#475866',
    radioButtonBg: '#fff',
    radioButtonCheckedBg: '#fff',
    radioButtonColor: 'rgba(0, 0, 0, 0.65)',
    radioButtonHoverColor: '#636c73',
    radioButtonActiveColor: '#293540',

    screenXs: '480px',
    screenXsMin: '480px',
    screenSm: '576px',
    screenSmMin: '576px',
    screenMd: '768px',
    screenMdMin: '768px',
    screenLg: '992px',
    screenLgMin: '992px',
    screenXl: '1200px',
    screenXlMin: '1200px',
    screenXxl: '1600px',
    screenXxlMin: '1600px',
    screenXsMax: '575px',
    screenSmMax: '767px',
    screenMdMax: '991px',
    screenLgMax: '1199px',
    screenXlMax: '1599px',

    gridColumns: '24',
    gridGutterWidth: '0',

    layoutBodyBackground: '#fff',
    layoutHeaderBackground: '#fff',
    layoutFooterBackground: '#fff',
    layoutHeaderHeight: '40px',
    layoutHeaderPadding: `0 ${spacing(1)}`,
    layoutFooterPadding: `${spacing(2)} ${spacing(1)}`,
    layoutSiderBackground: '#fff',
    layoutTriggerHeight: '48px',
    layoutTriggerBackground: '#002140',
    layoutTriggerColor: '#fff',
    layoutZeroTriggerWidth: '36px',
    layoutZeroTriggerHeight: '42px',
    layoutSiderBackgroundLight: '#fff',
    layoutTriggerBackgroundLight: '#fff',
    layoutTriggerColorLight: 'rgba(0, 0, 0, 0.65)',

    zindexTableFixed: 'auto',
    zindexAffix: 10,
    zindexBackTop: 10,
    zindexBadge: 10,
    zindexPickerPanel: 10,
    zindexPopupClose: 10,
    zindexModal: 1000,
    zindexModalMask: 1000,
    zindexMessage: 1010,
    zindexNotification: 1010,
    zindexPopover: 1030,
    zindexDropdown: 1050,
    zindexPicker: 1050,
    zindexTooltip: 1060,

    animationDurationSlow: '0.3s',
    animationDurationBase: '0.2s',
    animationDurationFast: '0.1s',

    collapsePanelBorderRadius: '4px',

    dropdownVerticalPadding: '5px',
    dropdownFontSize: '12px',
    dropdownLineHeight: '22px',

    labelRequiredColor: '#D80000',
    labelColor: 'rgba(0, 0, 0, 0.85)',

    formWarningInputBg: '#fff',
    formItemMarginBottom: '24px',
    formItemTrailingColon: 'true',
    formVerticalLabelPadding: '0 0 8px',
    formVerticalLabelMargin: '0',
    formErrorInputBg: '#fff',

    inputHeightBase: '32px',
    inputHeightLg: '40px',
    inputHeightSm: '24px',
    inputPaddingHorizontal: spacing(1),
    inputPaddingHorizontalBase: spacing(1),
    inputPaddingHorizontalSm: spacing(0.5),
    inputPaddingHorizontalLg: spacing(1.5),
    inputPaddingVerticalBase: spacing(0.4),
    inputPaddingVerticalSm: spacing(1),
    inputPaddingVerticalLg: spacing(1.5),
    inputPlaceholderColor: '#bfbfbf',
    inputColor: 'rgba(0, 0, 0, 0.65)',
    inputBorderColor: '#d9d9d9',
    inputBg: '#fff',
    inputNumberHandlerActiveBg: '#f4f4f4',
    inputAddonBg: '#fafafa',
    inputHoverBorderColor: '#636c73',
    inputDisabledBg: '#f5f5f5',
    inputOutlineOffset: '0 0',

    selectBorderColor: '#d9d9d9',
    selectItemSelectedFontWeight: '600',

    tooltipMaxWidth: '250px',
    tooltipColor: '#fff',
    tooltipBg: 'rgba(0, 0, 0, 0.75)',
    tooltipArrowWidth: '5px',
    tooltipDistance: '8px',
    tooltipArrowColor: 'rgba(0, 0, 0, 0.75)',

    popoverBg: '#fff',
    popoverColor: 'rgba(0, 0, 0, 0.65)',
    popoverMinWidth: '177px',
    popoverArrowWidth: '6px',
    popoverArrowColor: '#fff',
    popoverArrowOuterColor: '#fff',
    popoverDistance: '10px',

    modalBodyPadding: '24px',
    modalHeaderBg: '#fff',
    modalFooterBg: 'transparent',
    modalMaskBg: 'rgba(0, 0, 0, 0.65)',

    progressDefaultColor: '#0077bb',
    progressRemainingColor: '#f5f5f5',
    progressTextColor: 'rgba(0, 0, 0, 0.65)',
    progressRadius: '100px',

    menuInlineToplevelItemHeight: '40px',
    menuItemHeight: '40px',
    menuCollapsedWidth: '80px',
    menuBg: '#fff',
    menuPopupBg: '#fff',
    menuItemColor: 'rgba(0, 0, 0, 0.65)',
    menuHighlightColor: '#475866',
    menuItemActiveBg: '#9ca3a6',
    menuItemActiveBorderWidth: '3px',
    menuItemGroupTitleColor: 'rgba(0, 0, 0, 0.45)',
    menuDarkColor: 'rgba(255, 255, 255, 0.65)',
    menuDarkBg: '#fff',
    menuDarkArrowColor: '#fff',
    menuDarkSubmenuBg: '#000c17',
    menuDarkHighlightColor: '#fff',
    menuDarkItemActiveBg: '#475866',

    spinDotSizeSm: '14px',
    spinDotSize: '20px',
    spinDotSizeLg: '32px',

    tableHeaderBg: '#fafafa',
    tableHeaderColor: 'rgba(0, 0, 0, 0.85)',
    tableHeaderSortBg: '#f5f5f5',
    tableBodySortBg: 'rgba(0, 0, 0, 0.01)',
    tableRowHoverBg: '#9ca3a6',
    tableSelectedRowColor: 'inherit',
    tableSelectedRowBg: '#fafafa',
    tableBodySelectedSortBg: '#fafafa',
    tableSelectedRowHoverBg: '#fafafa',
    tableExpandedRowBg: '#fbfbfb',
    tablePaddingVertical: '16px',
    tablePaddingHorizontal: '16px',
    tableBorderRadiusBase: '4px',

    tagDefaultBg: '#fafafa',
    tagDefaultColor: 'rgba(0, 0, 0, 0.65)',
    tagFontSize: '10px',

    timePickerPanelColumnWidth: '56px',
    timePickerPanelWidth: '168px',
    timePickerSelectedBg: '#f5f5f5',

    carouselDotWidth: '16px',
    carouselDotHeight: '3px',
    carouselDotActiveWidth: '24px',

    badgeHeight: '20px',
    badgeDotSize: '6px',
    badgeFontSize: '10px',
    badgeFontWeight: 'normal',
    badgeStatusSize: '6px',
    badgeTextColor: '#fff',

    rateStarColor: '#fadb14',
    rateStarBg: '#e8e8e8',

    cardHeadColor: 'rgba(0, 0, 0, 0.85)',
    cardHeadBackground: 'transparent',
    cardHeadPadding: '16px',
    cardInnerHeadPadding: '12px',
    cardPaddingBase: '24px',
    cardActionsBackground: '#fafafa',
    cardBackground: '#cfd8dc',
    cardShadow: '0 2px 8px rgba(0, 0, 0, 0.09)',
    cardRadius: '2px',

    commentPaddingBase: '16px 0',
    commentNestIndent: '44px',
    commentFontSizeBase: '12px',
    commentFontSizeSm: '10px',
    commentAuthorNameColor: 'rgba(0, 0, 0, 0.45)',
    commentAuthorTimeColor: '#ccc',
    commentActionColor: 'rgba(0, 0, 0, 0.45)',
    commentActionHoverColor: '#595959',

    tabsCardHeadBackground: '#fafafa',
    tabsCardHeight: '40px',
    tabsCardActiveColor: '#475866',
    tabsTitleFontSize: '12px',
    tabsTitleFontSizeLg: '14px',
    tabsTitleFontSizeSm: '12px',
    tabsInkBarColor: '#475866',
    tabsBarMargin: '0 0 16px 0',
    tabsHorizontalMargin: '0 32px 0 0',
    tabsHorizontalPadding: '12px 16px',
    tabsHorizontalPaddingLg: '16px',
    tabsHorizontalPaddingSm: '8px 16px',
    tabsVerticalPadding: '8px 24px',
    tabsVerticalMargin: '0 0 16px 0',
    tabsScrollingSize: '32px',
    tabsHighlightColor: '#475866',
    tabsHoverColor: '#636c73',
    tabsActiveColor: '#293540',
    tabsCardGutter: '2px',
    tabsCardTabActiveBorderTop: '2px solid transparent',

    backTopColor: '#fff',
    backTopBg: 'rgba(0, 0, 0, 0.45)',
    backTopHoverBg: 'rgba(0, 0, 0, 0.65)',

    avatarSizeBase: '32px',
    avatarSizeLg: '40px',
    avatarSizeSm: '24px',
    avatarFontSizeBase: '18px',
    avatarFontSizeLg: '24px',
    avatarFontSizeSm: '14px',
    avatarBg: '#ccc',
    avatarColor: '#fff',
    avatarBorderRadius: '4px',

    switchHeight: '22px',
    switchSmHeight: '16px',
    switchSmCheckedMarginLeft: '-13px',
    switchDisabledOpacity: '0.4',
    switchColor: '#475866',
    switchShadowColor: 'rgba(0, 35, 11, 0.2)',

    paginationItemSize: '32px',
    paginationItemSizeSm: '24px',
    paginationFontFamily: 'Arial',
    paginationFontWeightActive: '500',
    paginationItemBgActive: '#fff',

    pageHeaderPaddingHorizontal: spacing(0),
    pageHeaderPaddingVertical: spacing(2),

    breadcrumbBaseColor: 'rgba(0, 0, 0, 0.45)',
    breadcrumbLastItemColor: 'rgba(0, 0, 0, 0.65)',
    breadcrumbFontSize: '12px',
    breadcrumbIconFontSize: '12px',
    breadcrumbLinkColor: 'rgba(0, 0, 0, 0.45)',
    breadcrumbLinkColorHover: '#636c73',
    breadcrumbSeparatorColor: 'rgba(0, 0, 0, 0.45)',
    breadcrumbSeparatorMargin: '0 8px',

    sliderMargin: '14px 6px 10px',
    sliderRailBackgroundColor: '#f5f5f5',
    sliderRailBackgroundColorHover: '#e1e1e1',
    sliderTrackBackgroundColor: '#84898c',
    sliderTrackBackgroundColorHover: '#787d80',
    sliderHandleBorderWidth: '2px',
    sliderHandleBackgroundColor: '#fff',
    sliderHandleColor: '#84898c',
    sliderHandleColorHover: '#787d80',
    sliderHandleColorFocus: '#6c7985',
    sliderHandleColorFocusShadow: 'rgba(71, 88, 102, 0.2)',
    sliderHandleColorTooltipOpen: '#475866',
    sliderHandleShadow: '0',
    sliderDotBorderColor: '#e8e8e8',
    sliderDotBorderColorActive: '#a3acb3',
    sliderDisabledColor: 'rgba(0, 0, 0, 0.25)',
    sliderDisabledBackgroundColor: '#fff',

    treeTitleHeight: '24px',
    treeChildPadding: '18px',

    treeDirectorySelectedColor: '#fff',
    treeDirectorySelectedBg: '#475866',

    collapseHeaderPadding: '12px 16px',
    collapseHeaderPaddingExtra: '40px',
    collapseHeaderBg: '#fafafa',
    collapseContentPadding: '16px',
    collapseContentBg: '#fff',

    skeletonColor: '#f2f2f2',

    transferHeaderHeight: '40px',
    transferDisabledBg: '#f5f5f5',
    transferListHeight: '200px',

    messageNoticeContentPadding: '10px 16px',

    waveAnimationWidth: '6px',

    alertSuccessBorderColor: '#6ac75f',
    alertSuccessBgColor: '#cee0ca',
    alertSuccessIconColor: '#00A000',
    alertInfoBorderColor: '#dff2f7',
    // alertInfoBorderColor: '#81c3de',
    alertInfoBgColor: '#dff2f7',
    alertInfoIconColor: '#1279B8',
    alertWarningBorderColor: '#ffd187',
    alertWarningBgColor: '#fff7e6',
    alertWarningIconColor: '#EF820D',
    alertErrorBorderColor: '#de766a',
    alertErrorBgColor: '#f7e3df',
    alertErrorIconColor: '#B80000',

    listHeaderBackground: 'transparent',
    listFooterBackground: 'transparent',
    listEmptyTextPadding: '16px',
    listItemPadding: '12px 0',
    listItemMetaMarginBottom: '16px',
    listItemMetaAvatarMarginRight: '16px',
    listItemMetaTitleMarginBottom: '12px',

    statisticTitleFontSize: '12px',
    statisticContentFontSize: '24px',
    statisticUnitFontSize: '16px',
    statisticFontFamily: 'Tahoma, "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

    drawerHeaderPadding: '16px 24px',
    drawerBodyPadding: '24px',

    timelineWidth: '2px',
    timelineColor: '#e8e8e8',
    timelineDotBorderWidth: '2px',
    timelineDotColor: '#475866',
    timelineDotBg: '#fff',

    spacing,
    agGridHeaderBackground: 'linear-gradient(#ffffff, #ececed)',
    agGridHeaderSortIconColor: 'linear-gradient(#ffffff, #ececed)',
    agGridHeaderTextColor: '#565a5c',
    agGridBodyTextColor: '#565a5c',
    agGridBorderColor: '#ccc'
};