export interface FormConfigType {
  label: string;
  prop: string;
  placeholder?: string;
  dicData?: {
    label: string;
    value: any;
  }[];
  rules?: {
    required?: boolean;
    message: string;
    min?: number;
    max?: number;
    pattern?: RegExp;
    type?: string;
  }[];
  type:
    | 'input'
    | 'select'
    | 'radio'
    | 'checkbox'
    | 'date'
    | 'time'
    | 'datetime'
    | 'textarea'
    | 'switch'
    | 'slider'
    | 'rate'
    | 'upload'
    | 'color'
    | 'cascader'
    | 'transfer'
    | 'treeSelect'
    | 'tree'
    | 'custom'
    | 'password';

  slot?:
    | {
        component?: string;
        class?: string;
      }
    | boolean;
  options?: FormOptionsType;
}

export enum FormType {
  input = 'a-input',
  select = 'a-select',
  radio = 'a-radio-group',
  checkbox = 'a-checkbox-group',
  date = 'a-date-picker',
  time = 'a-time-picker',
  datetime = 'a-date-time-picker',
  textarea = 'a-textarea',
  switch = 'a-switch',
  slider = 'a-slider',
  rate = 'a-rate',
  upload = 'a-upload',
  color = 'a-color-picker',
  cascader = 'a-cascader',
  transfer = 'a-transfer',
  treeSelect = 'a-tree-select',
  tree = 'a-tree',
  custom = 'custom',
  password = 'a-input-password',
}

export enum FormSecondLevelType {
  select = 'a-select-option',
  radio = 'a-radio',
  checkbox = 'a-checkbox',
}

export interface FormOptionsType {
  children: Record<string, any>;
  [key: string]: any;
}
