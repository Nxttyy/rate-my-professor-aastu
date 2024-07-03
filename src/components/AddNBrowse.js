function AddNBrowse() {
  return (
    <div className=" d-flex flex-column justify-content-around  align-items-center gap-3 container">
      <div className="w-100">
        <button className="w-100 py-1 rounded my-button">
          <p className="h-3"> Add Professors</p>
        </button>
        <p className="h-4 hint m-2">
          add unlisted professors so students can write reviews!
        </p>
      </div>
      <div className="w-100">
        <button className="w-100 py-1 rounded my-button">
          <p className="h-3"> browse Professors</p>
        </button>
        <p className="h-4 hint m-2"> browse Professor reviews already added!</p>
      </div>
    </div>
  );
}

export default AddNBrowse;
