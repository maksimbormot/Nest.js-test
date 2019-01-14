import { Controller } from '@nestjs/common';
import { Client, Transport, MessagePattern } from '@nestjs/microservices';
import { PaymentsService } from './payments.service'

@Controller()
export class PaymentsController {
  constructor(private readonly ordersService: PaymentsService) {}

  @Client({ transport: Transport.TCP, options: { port: 3002 } })

  @MessagePattern({ cmd: 'approvePayment' })
  approvePayment() {
    return this.ordersService.approvePayment();
  }

}
