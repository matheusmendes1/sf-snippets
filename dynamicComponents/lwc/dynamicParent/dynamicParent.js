import { LightningElement } from 'lwc';

export default class DynamicParent extends LightningElement {
  dynamicComponent;
  message = 'Hello from Parent!';

  async loadDynamicComponentWithProps() {
    const module = await import ('c/dynamicChild'); // Dynamically import the child
    this.dynamicComponent = module.default; // Assign the constructor to lwc:is
  }
}