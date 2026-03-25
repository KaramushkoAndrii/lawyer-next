const DynamicListItems = ({ typeItem, list }) => {
  const Tag = typeItem;
  return (
    <>
      {list.map(({ description, id, ...rest }) => (
        <Tag {...rest} key={id}>
          {description}
        </Tag>
      ))}
    </>
  );
};

export default DynamicListItems;
