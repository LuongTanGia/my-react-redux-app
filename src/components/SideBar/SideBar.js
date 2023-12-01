import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./sidebar.css";

const StateToProps = (state) => ({
    data: state.data,
});

const SideBar = ({ data }) => {
    const [string, setString] = useState([]);

    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to="/">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    {/* sidebar dataa */}
                    {data.DataResults
                        ? data.DataResults.map(
                              (item, index) =>
                                  item.NhomChucNang === "10" && (
                                      <li class="nav-item" index={index}>
                                          <Link
                                              class="nav-link collapsed"
                                              data-bs-target={`#${item.MaChucNang}-nav`}
                                              data-bs-toggle="collapse"
                                          >
                                              <i class="bi bi-menu-button-wide"></i>
                                              <span>{item.TenChucNang}</span>
                                              <i class="bi bi-chevron-down ms-auto"></i>
                                          </Link>
                                          <ul
                                              id={`${item.MaChucNang}-nav`}
                                              class="nav-content collapse"
                                              data-bs-parent="#sidebar-nav"
                                          >
                                              {data.DataResults.map(
                                                  (chir_data) =>
                                                      chir_data.NhomChucNang ===
                                                      item.MaChucNang ? (
                                                          <li
                                                              key={
                                                                  chir_data.MaChucNang
                                                              }
                                                              className="submenu-item"
                                                          >
                                                              <Link
                                                                  to={`/${
                                                                      string.includes(
                                                                          chir_data.MaChucNang
                                                                      )
                                                                          ? "#!"
                                                                          : chir_data.MaChucNang
                                                                  }`}
                                                              >
                                                                  <i class="bi bi-circle"></i>
                                                                  {
                                                                      chir_data.TenChucNang
                                                                  }
                                                              </Link>
                                                              <ul className="submenu_2">
                                                                  {data.DataResults.map(
                                                                      (
                                                                          chir_data_2
                                                                      ) =>
                                                                          chir_data_2.NhomChucNang ===
                                                                          chir_data.MaChucNang
                                                                              ? string.push(
                                                                                    chir_data.MaChucNang
                                                                                ) && (
                                                                                    <li
                                                                                        key={
                                                                                            chir_data_2.MaChucNang
                                                                                        }
                                                                                        className="submenu-item_2"
                                                                                    >
                                                                                        <Link
                                                                                            to={`/${chir_data.MaChucNang}/${chir_data_2.MaChucNang}`}
                                                                                            title={
                                                                                                chir_data_2.TenChucNang
                                                                                            }
                                                                                        >
                                                                                            <i class="bi bi-circle-fill"></i>
                                                                                            {
                                                                                                chir_data_2.TenChucNang
                                                                                            }
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                              : null
                                                                  )}
                                                              </ul>
                                                          </li>
                                                      ) : null
                                              )}
                                          </ul>
                                      </li>
                                  )
                          )
                        : null}
                </ul>
            </aside>
        </>
    );
};

export default connect(StateToProps)(SideBar);
