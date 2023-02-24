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
    | 'custom';
  slot?:
    | {
        component?: string;
        class?: string;
      }
    | boolean;
  options?: Record<string, any>;
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
}

export enum FormSecondLevelType {
  select = 'a-select-option',
  radio = 'a-radio',
  checkbox = 'a-checkbox',
}

/* export enum FormSecondLevelTypeKey {
  select = 1,
  radio = 2,
  checkbox = 3,
}

export enum FormThirdLevelTypeLabel {
  select = 'a-select-option',
  radio = 'a-radio',
  checkbox = 'a-checkbox',
} */
/* declare type DicMapType<T> = {
  [key in keyof T]: {
    label: string;
    value: T;
    enumkey: string;
  };
};
export declare function enumToMap<T>(enumme: T, enummeLabel: any): DicMapType<T>;

export const FormSecondLevelType = enumToMap<typeof FormSecondLevelTypeKey>(
  FormSecondLevelTypeKey,
  FormThirdLevelTypeLabel,
); // {1: {label: 'a-select-option', value: 1, enumkey: 'select'}, 2: {label: 'a-radio', value: 2, enumkey: 'radio'}, 3: {label: 'a-checkbox', value: 3, enumkey: 'checkbox'}}
Object.values(FormSecondLevelType).map(v => String(v.value)); // ["1", "2", "3"] */

export enum type {
  AUTOCREATE = 1,
  MANUALCREATE = 2,
}
