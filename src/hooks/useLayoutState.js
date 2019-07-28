import { useSelector } from 'react-redux';

export default () => useSelector(({layout}) => layout)