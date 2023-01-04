import { SelectInput, Option, SelectWrapper } from "./styles";
import P from "prop-types";
import "./styles.css";

const Select = ({
  updateFilterValue,
  filterData,
  dataName,
  filterName,
  borderColor,
}) => {
  return (
    <SelectWrapper onClick={updateFilterValue}>
      <SelectInput name={dataName} cor={borderColor}>
        {filterData.map((curElem, index) => {
          return (
            <Option
              cor={borderColor}
              checkedColor={borderColor}
              key={index}
              value={curElem}
            >
              {curElem === "all"
                ? `All ${dataName.charAt(0).toUpperCase() + dataName.slice(1)}`
                : curElem.includes(dataName)
                ? filterName.map((f) =>
                    f.url === curElem ? f.title || f.name : "",
                  )
                : curElem.charAt(0).toUpperCase() + curElem.slice(1)}
            </Option>
          );
        })}
      </SelectInput>
    </SelectWrapper>
  );
};

Select.propTypes = {
  updateFilterValue: P.func,
  filterData: P.array,
  dataName: P.string,
  filterName: P.array,
  borderColor: P.string,
};

export default Select;
