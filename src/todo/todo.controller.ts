import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { todoDTO } from './dto';

@Controller('todo')
export class TodoController {
  constructor(private service: TodoService) {}
  @Get('all')
  getAllTodo() {
    return this.service.getAllTodo();
  }
  @Post('add')
  addOne(@Body() dto: todoDTO) {
    return this.service.addOne(dto);
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.service.getOne(Number(id));
  }
  @Post('update/:id')
  updateOne(@Param('id') id: number, @Body() dto: todoDTO) {
    return this.service.updateOne(Number(id), dto);
  }
  @Delete('delete/:id')
  deleteOne(@Param('id') id: number) {
    return this.service.deleteOne(Number(id));
  }
}
