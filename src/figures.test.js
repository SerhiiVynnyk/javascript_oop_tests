import { Circle, Square, Trapezium, Triangle } from "./random_array_figures";

const squere = new Square(2, 'жовтий');
const triangle = new Triangle(4, 3, 45, 'синій');
const circle = new Circle(4, 'червоний');
const trapezium = new Trapezium(4, 3, 2, 1.5, 1.5, 'жовтий');


describe('Test figures classes', () => {
  it('Squere area should be 4, perimeter 8 and color жовтий', () =>{
    expect(squere.area).toBe(4);
    expect(squere.perimeter).toBe(8);
    expect(squere.color).toBe('жовтий');
  });

  it('Triangle area should be 5.45, perimeter 5.1 and color синій', () =>{
    expect(triangle.area).toBe(5.45);
    expect(triangle.perimeter).toBe(9);
    expect(triangle.color).toBe('синій');
  });

  it('Circle area should be 50, perimeter 25 and color черврний', () =>{
    expect(circle.area).toBe(50);
    expect(circle.perimeter).toBe(8);
    expect(circle.color).toBe('черврний');
  });

  it('Trapezium area should be 5.25, perimeter 10.5 and color жовтий', () =>{
    expect(trapezium.area).toBe(5.25);
    expect(trapezium.perimeter).toBe(10.5);
    expect(trapezium.color).toBe('жовтий');
  });
});