import { act } from "react-dom/test-utils";
import { createRoot } from 'react-dom/client';
import Product from '../components/Product';

let container = null;
container = document.createElement("div")
const root = createRoot(container);

beforeEach(() => {
  // setup a DOM element as a render target
  document.body.appendChild(container);
});

afterEach(() => {
  root.unmount();
  container.remove();
  container = null;
});

describe('Items List', () => {
  it('should check items', async () => {
    const fakeProudct = {
      pid: "1",
      SKU: 'TEST001',
      Name: "TEST",
      Price: "20 $",
      Measure: "Weight: 2 KG"
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeProudct)
      })
    );

     // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      root.render(<Product item={fakeProudct} onCheckBoxChange={null} />);
    });
    

    expect(container.querySelector("p").textContent).toBe(" "+fakeProudct.SKU+" ");
  })
})
