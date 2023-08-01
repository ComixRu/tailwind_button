import './App.css'
import {Button} from "./components/Button/Button";
import {PiggyIcon} from "./components/Icons/PiggyIcon";

function App() {
    const handleClick = () => {
        console.log('Button clicked');
    };
  return (
    <>
        <div className="space-y-4">
            {/* Regular buttons */}
            <Button onClick={handleClick}>Click Me</Button>

            {/* Disabled button */}
            <Button disabled>Disabled Button</Button>

            {/* Loading button */}
            <Button loading>Loading...</Button>

            {/* Outlined buttons */}
            <Button variant="outlined" color="secondary">Outlined Button</Button>

            {/* Filled buttons */}
            <Button>Default Filled Button</Button>
            <Button color="secondary">Secondary Filled Button</Button>

            {/* Different sizes */}
            <Button size="sm">Small Button</Button>
            <Button>Default Button</Button>
            <Button size="lg">Large Button</Button>

            {/* Filled buttons with icons */}
            <Button icon={<PiggyIcon />} size="sm">Button with Icon small</Button>
            <Button icon={<PiggyIcon />}>Button with Icon medium</Button>
            <Button icon={<PiggyIcon />} size="lg">Button with Icon large</Button>
        </div>
    </>
  )
}

export default App
