import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return 'Orders App'
  }

  @Post()
  createOrder() {
    return this.appService.createOrder()
  }

  @Get('status')
  getOrderStatus(@Param('id') id) {
    return this.appService.getOrderStatus(id)
  }

  @Get('cancel')
  cancelOrder(@Param('id') id) {
    return this.appService.cancelOrder(id)
  }

}
