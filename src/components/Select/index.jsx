import { SelectInput, Option, SelectWrapper } from "./styles";
import P from "prop-types";
import "./styles.css";

export const Select = ({
  updateFilterValue,
  filterData,
  dataName,
  filterName,
  borderColor,
}) => {
  return (
    <SelectWrapper onChange={updateFilterValue}>
      <SelectInput name={dataName} cor={borderColor}>
        {filterData.map((curElem) => {
          return (
            <Option
              cor={borderColor}
              checkedColor={borderColor}
              key={curElem}
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
