import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @Client({ transport: Transport.TCP, options: { port: 3001 } })
  orders: ClientProxy;

  createOrder() {
    return 'Create Order';
  }

  cancelOrder() {
    return 'Cancel Order Status';
  }

  getOrderStatus() {
    return 'Get Order Status';
  }

}
