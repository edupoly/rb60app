import React from "react";

function Uploadform() {
  function handleSubmit(ev) {
    ev.preventDefault();
    var fd = new FormData(ev.target);
    console.log(fd);
    fetch("http://localhost:3500/uploadFile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <h2>uploadform</h2>
      <form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
        enctype="multipart/form-data"
      >
        <input type="text" name="fullname" />
        <br />
        <input type="text" name="age" />
        <br />
        <input type="file" name="profilepic" />
        <br />
        <button>Save</button>
      </form>
    </div>
  );
}

export default Uploadform;
