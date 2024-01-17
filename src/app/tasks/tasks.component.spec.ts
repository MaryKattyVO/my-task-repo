import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksComponent } from './tasks.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksComponent ],
      providers: [provideMockStore()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add a task', () => {
    component.newTask = 'New Task';
    component.addTask();

    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].description).toBe('New Task');
    expect(component.tasks[0].completed).toBe(false);
    expect(component.newTask).toBe('');
  });
  it('should not add a task with empty description', () => {
    component.newTask = '';
    spyOn(window, 'alert');

    component.addTask();

    expect(component.tasks.length).toBe(0);
    expect(window.alert).toHaveBeenCalledWith('Por favor, ingresa una tarea antes de agregarla.');
  });
  it('should delete a task', () => {
    const task = { description: 'Task to delete', completed: false };
    component.tasks = [task];

    component.deleteTask(task);

    expect(component.tasks.length).toBe(0);
  });
});
