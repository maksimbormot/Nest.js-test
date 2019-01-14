import { Controller } from '@nestjs/common';
import { Client, Transport, MessagePattern } from '@nestjs/microservices';
import { OrdersService } from './orders.service'

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Client({ transport: Transport.TCP, options: { port: 3001 } })

  @MessagePattern({ cmd: 'createOrder' })
  create() {
    return this.ordersService.createOrder();
  }

  @MessagePattern({ cmd: 'getOrderStatus' })
  getOrderStatus() {
    return this.ordersService.getOrderStatus();
  }

  @MessagePattern({ cmd: 'cancelOrder' })
  cancel() {
    return this.ordersService.cancelOrder();
  }
}
