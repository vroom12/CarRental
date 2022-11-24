import { modelOptions, Prop } from '@typegoose/typegoose';
@modelOptions({
  options: { allowMixed: 0 },
  schemaOptions: {
    timestamps: true,
  },
})
export class users {
  @Prop()
  username: string;

  @Prop()
  password: string | number;

  @Prop()
  headPortrait?: string;
}
