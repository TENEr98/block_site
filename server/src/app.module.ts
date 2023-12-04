import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AccountModule } from './account/account.module';
import { BlockListModule } from './block-list/block-list.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule, AccountModule, BlockListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
