function Child(props) {
    const sendData = () => {
      props.parentCallback("Message from Child");
    };
  
    return (
      // Gọi function sendData bất cứ khi nào bạn muốn truyền dữ liệu lên Parent component (khi có sự kiện xảy ra như onClick, onChange, ...)
      <h1></h1>
    )
  };