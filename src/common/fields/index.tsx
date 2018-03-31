import { wrapForReduxField } from '../utils/field-wrapper';
import { Input } from 'antd';
const { TextArea } = Input;

export const InputField = wrapForReduxField(Input);
export const TextAreaField = wrapForReduxField(TextArea);
