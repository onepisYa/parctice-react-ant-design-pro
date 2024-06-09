function RespondEvents() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button type="button" onClick={handleClick}>
      Click me
    </button>
  );
}

export default RespondEvents;
