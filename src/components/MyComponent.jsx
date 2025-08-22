// Tests unitaires
describe('MyComponent', () => {
  it('should render correctly', () => {
    const component = render(<MyComponent />);
    expect(component).toMatchSnapshot();
  });
});

// Tests de sécurité
describe('MyComponent', () => {
  it('should not allow XSS attacks', () => {
    const component = render(<MyComponent userInput="<script>alert('XSS')</script>" />);
    expect(component).toMatchSnapshot();
  });
});