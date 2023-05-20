import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { GET_HASHTAGS_REQUEST} from "@/reducers/post";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

type HashListProps = {
    setShowHashModalOpen : any
};

export default function HashList({setShowHashModalOpen}: HashListProps) {

    const { userCurrentWorkspaceId } = useSelector((state: any) => state.user)
    const { currentSpaceId } = useSelector((state: any) => state.workspace);
    const dispatch = useDispatch();
    
    const getHashtags = useCallback(() => {
        //dispatch
        dispatch({
          type: GET_HASHTAGS_REQUEST,
          data:{
            referenceId : currentSpaceId,
          }
        });
        setShowHashModalOpen(true);
      }, [dispatch,currentSpaceId]);

  return (
    <>
        <Button
            variant="contained"
            sx={{
              // height: "60%",
              whiteSpace: "nowrap",
              marginRight: "5px",
              fontWeight: "bold",
              display: "inline-block",
            }}
            size="small"
            onClick={getHashtags}
          >
            #모음
          </Button>
    </>
  );
}
