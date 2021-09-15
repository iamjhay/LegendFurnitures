import React, { useEffect, useState } from "react";
import { Snackbar, makeStyles, Modal, Backdrop, Fade } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    width: 650,
    height: 350,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    outline: "none",
    border: "none",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "85vw",
      height: "40vh",
    },
  },
  form: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 30,
    position: "relative",
  },
  item: {
    marginBottom: theme.spacing(3),
    display: "flex",
  },
}));

const ModalPopup = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1000);

    return () => {
      clearTimeout(setOpen(false));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);

    if (title === "") {
      setTitleError(true);
    }
  };

  const submit = () => {
    if (title) {
      setOpen(false);
      setOpenAlert(true);
    } else if (!title) {
      setErrorAlert(true);
    }
  };

  const handleClose = () => {
    setOpenAlert(false);
    setErrorAlert(false);
  };

  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <div className={classes.container}>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full relative">
              <div className="hidden sm:block">
                <img
                  src="./images/work-4.jpeg"
                  alt="img"
                  className="object-cover object-center h-full"
                />
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full block sm:hidden z-10">
                <img
                  src="./images/sofa-5.jfif"
                  alt="img"
                  className="object-cover object-center h-full w-full"
                />
              </div>
              <div className="bg-gray-800 bg-opacity-25 absolute top-0 left-0 right-0 bottom-0 w-full block sm:hidden z-20"></div>
              <form
                className={classes.form}
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <p className="text-2xl text-white sm:text-black font-light tracking-tight px-4 text-center pb-10">
                  Subscribe to our Newsletter
                </p>
                <div className={classes.item}>
                  <input
                    class="border-b bg-transparent outline-none focus:border-b-yellow-500 sm:placeholder-gray-400 placeholder-gray-50 w-full"
                    placeholder="enter email address"
                    error={titleError}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <button
                    class="bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 w-[150px] p-2"
                    onClick={() => submit()}
                  >
                    Sign up
                  </button>
                  <button
                    className="absolute top-1 right-1 "
                    onClick={() => setOpen(false)}
                  >
                    <CloseIcon />
                  </button>
                  {/* <TextField
                    id="standard-basic"
                    label="Title"
                    size="small"
                    fullWidth
                    required
                    error={titleError}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className={classes.item}>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: 20 }}
                    onClick={() => submit()}
                  >
                    Create
                  </Button>
                   */}
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Thank you for subscribing to our news mail.
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error">
          please enter all fields!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ModalPopup;
