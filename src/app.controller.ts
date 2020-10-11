import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FormScheme } from '@anmeldung/blocks';


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('app')
  defaultAction(): string {
    return this.appService.getHello();
  }
}
