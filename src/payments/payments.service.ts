import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
  @Client({ transport: Transport.TCP, options: { port: 3001 } })
  orders: ClientProxy;

  approvePayment() {
    console.log('approvePayment Microservice');

    const approve = Math.random() > 0.5 ? true : false

    const pattern = { cmd: approve ? 'confirmOrder' : 'cancelOrder'}
    const payload = { approve}

    return this.orders.send(pattern, payload)
  }

}
