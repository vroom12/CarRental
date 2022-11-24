import { Module, DynamicModule, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getModelForClass } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { DbService } from './db.service';

type ClassType = { new (...args: any[]): any };

@Module({})
export class DbModule {
  static forRoot(envKey: string, options = {}, model: any): DynamicModule {
    const providers: Provider[] = [
      {
        provide: 'DB_CONNECTION',
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          const uri = configService.get<string>(envKey);
          return mongoose.connect(uri, options);
        },
      },
      {
        provide: model.name,
        useFactory: () => getModelForClass(model),
      },
    ];
    return {
      module: DbModule,
      providers,
      exports: providers,
      global: true,
    };
  }

  static forFeature(models: ClassType[]): DynamicModule {
    const providers = models.map((model) => {
      return {
        provide: model.name,
        useFactory: () => getModelForClass(model),
      } as Provider;
    });
    return {
      module: DbModule,
      providers,
      exports: providers,
      global: true,
    };
  }
}
