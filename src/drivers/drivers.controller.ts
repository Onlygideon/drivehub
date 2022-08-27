import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AddDriverDto } from './dto/add-driver.dto.js';

@Controller()
export class DriversController {
  @Get('drivers')
  allDrivers(): string {
    return 'All Drivers';
  }

  @Get('driver/:driverId')
  fetchDriver(@Param('driverId') driverId): string {
    return `Driver with id of ${driverId}`;
  }

  @Post('driver')
  addDriver(@Body() addDriverDto: AddDriverDto): string {
    return 'Added Driver';
  }

  @Put('driver/:driverId')
  updateDriver(
    @Body() updateDriverDto: AddDriverDto,
    @Param('driverId') driverId,
  ): string {
    return `Driver with the id ${driverId} info has been updated`;
  }

  @Delete('driver/:driverId')
  deleteDriver(@Param('driverId') driverId): string {
    return `Driver with the id of ${driverId} has been deleted`;
  }
}
