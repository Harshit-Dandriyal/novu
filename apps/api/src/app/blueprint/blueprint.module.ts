import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { NotificationTemplateModule } from '../notification-template/notification-template.module';
import { USE_CASES } from './usecases';
import { BlueprintController } from './blueprint.controller';

@Module({
  imports: [SharedModule, NotificationTemplateModule],
  controllers: [BlueprintController],
  providers: [...USE_CASES],
  exports: [...USE_CASES],
})
export class BlueprintModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {}
}
