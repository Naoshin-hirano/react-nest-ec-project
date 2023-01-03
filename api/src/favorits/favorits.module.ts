import { Module } from '@nestjs/common';
import { FavoritsController } from './favorits.controller';
import { FavoritsService } from './favorits.service';

@Module({
  controllers: [FavoritsController],
  providers: [FavoritsService]
})
export class FavoritsModule {}
