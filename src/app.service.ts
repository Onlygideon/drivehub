import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to DriveHub API, the best backend APi for a driving school web app';
  }
}
