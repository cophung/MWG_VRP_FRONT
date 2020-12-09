import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";

const ComponentTable = ({ selectionType, disabled, columns, data }) => {
  return (
    <Table
      rowSelection={{
        type: selectionType,
        getCheckboxProps: (record) => ({
          disabled: record.name === disabled ? disabled : "",
          name: record.name,
        }),
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

ComponentTable.propTypes = {
  selectionType: PropTypes.string,
  disabled: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
};

export default ComponentTable;
