import * as React from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
type SideBarProps = {};

type Anchor = "left";



export default function SideBar(props: SideBarProps) {
 
  const [onSidebar,setOnSidebar] = React.useState(false);


  const sidebarOnClick = React.useCallback(()=>{
    // setOnSidebar((prev) => !prev);
    alert("사이드 바 곧 나옵니다.");
  },[])
  


  return (
    <>
    { onSidebar ? (
      <div className="sidebar-container">
        <div>
          <div className="sidebar">
            <div>
              <div>
                <div
                  style={{
                    display: "block",
                    flexShrink: 0,
                    flexGrow: 0,
                    height: "45px",
                    marginTop : "30px"
                  }}
                >
                <div style={{ position: "absolute", right : "10px", opacity:"70%", zIndex:"100"  }}>
                  <DensityMediumIcon onClick={sidebarOnClick}/>
                </div>
                  <div className="sidebar-switcher">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div style={{ width: "auto" }}>
                        <span>👺</span>
                      </div>
                      <div style={{ width: "auto" }}>
                        <div>릴레이블</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ flexGrow: 0, flexShrink: 0, paddingBottom: "8px", height:"auto" }}
                >
                  <div className="sidebar-top">
                    <div>
                      <div
                        style={{
                          flex: "1 1 auto",
                          whiteSpace: "nowrap",
                          minWidth: "0px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          alignItems: "flex-start"
                        }}
                      >
                        검색
                      </div>
                      <div
                        style={{
                          flex: "1 1 auto",
                          whiteSpace: "nowrap",
                          minWidth: "0px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          alignItems: "flex-start"
                        }}
                      >
                        업데이트
                      </div>
                      <div
                        style={{
                          flex: "1 1 auto",
                          whiteSpace: "nowrap",
                          minWidth: "0px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          alignItems: "flex-start"
                        }}
                      >
                        설정
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroller">
                        <nav>
                          <div className="bookmarks-header-container">
                            <div style={{height:"24px"}}>
                              <div className="bookmarks-header" style={{alignItems:"flex-start"}}>즐겨찾기</div>
                            </div>
                            <div className="bookmarks">
                                <div style={{alignItems:"flex-start", height: "auto"}}>
                                  준비중
                                </div>
                                <div style={{alignItems:"flex-start", height: "auto"}}>
                                  준비중
                                </div>
                            </div>
                          </div>
                            <div className="team-header-container">
                              <div className="team-header" style={{height:"24px"}}>
                                <div style={{alignItems:"flex-start"}}>팀스페이스</div>
                              </div>
                              <div className="team-container">
                                <div className="team"  style={{alignItems:"flex-start", height: "auto"}}>
                                  준비중
                                </div>
                                <div className="team"  style={{alignItems:"flex-start", height: "auto"}}>
                                준비중
                                </div>
                              </div>

                            </div>
                            <div className="private-header-container">
                              <div className="private-header" style={{height:"24px"}}>
                                <div style={{alignItems:"flex-start"}}>개인페이지</div>
                              </div>
                              <div className="private" >
                                <div style={{alignItems:"flex-start", height: "auto"}}>준비중</div>
                                <div style={{alignItems:"flex-start", height: "auto"}}>준비중</div>
                              </div>
                          </div>
                        </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>) 
      :
      (
        <div style={{ position: "absolute",left:"20px", top : "10px", opacity:"70%", zIndex:"100"  }}>
          <DensityMediumIcon onClick={sidebarOnClick}/>
        </div>
      )
      }
    </>
  );
}
