import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  @Client({ transport: Transport.TCP, options: { port: 3001 } })
  orders: ClientProxy;

  createOrder() {
    return 'Create Order';
  }

  getOrderStatus() {
    return 'Get Order Status';
  }

  cancelOrder() {
    return 'Cancel Order Status';
  }

}
