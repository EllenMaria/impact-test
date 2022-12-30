import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import P from "prop-types";
import "./styles.css";

export const Dropdown = ({ setSelectDemoValue, selectDemoValue, genders }) => {
  return (
    <div className="App">
      <Select.Root value={selectDemoValue} onValueChange={setSelectDemoValue}>
        <Select.Trigger className="SelectTrigger" id="sampleSelectMenu">
          <Select.Value aria-label={selectDemoValue}>
            {genders[selectDemoValue]}
          </Select.Value>
          <Select.Icon>
            <ChevronDownIcon className="ChevronIcon" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButtonStyles">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">Gender</Select.Label>
              {genders.map((gender, index) => (
                <Select.Item key={index} value={gender} className="SelectItem">
                  <Select.ItemIndicator className="SelectItemIndicator">
                    <CheckIcon />
                  </Select.ItemIndicator>
                  <Select.ItemText>
                    {gender === "n/a" ? "undefined" : gender}
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButtonStyles">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

Dropdown.propTypes = {
  selectDemoValue: P.string,
  setSelectDemoValue: P.func,
  genders: P.array,
};

export default Dropdown;
