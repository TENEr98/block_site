import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from './dto/account.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionDto } from 'src/auth/dto/session.dto';
import { AccountService } from './account.service';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}
  @Get()
  @ApiOkResponse({ type: AccountDto })
  getAccount(@SessionInfo() session: GetSessionDto): Promise<AccountDto> {
    return this.accountService.getAccount(session.id);
  }

  @Patch()
  @ApiOkResponse({ type: AccountDto })
  patchAccount(
    @Body() body: PatchAccountDto,
    @SessionInfo() session: GetSessionDto,
  ): Promise<AccountDto> {
    return this.accountService.patchAccount(session.id, body);
  }
}
