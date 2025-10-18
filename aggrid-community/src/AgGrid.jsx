import { Component, createElement } from "react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import "./ui/AgGrid.css";

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

export class AgGrid extends Component {
    constructor(props) {
        super(props);
        
        // NBA MVP sample data
        this.state = {
            columnDefs: [
                { field: "name", headerName: "Player Name", sortable: true, filter: true },
                { field: "position", headerName: "Position", sortable: true, filter: true },
                { field: "team", headerName: "Team", sortable: true, filter: true },
                { field: "year", headerName: "MVP Year", sortable: true, filter: true }
            ],
            rowData: [
                { name: "Nikola Jokić", position: "Center", team: "Denver Nuggets", year: 2024 },
                { name: "Joel Embiid", position: "Center", team: "Philadelphia 76ers", year: 2023 },
                { name: "Nikola Jokić", position: "Center", team: "Denver Nuggets", year: 2022 },
                { name: "Nikola Jokić", position: "Center", team: "Denver Nuggets", year: 2021 },
                { name: "Giannis Antetokounmpo", position: "Power Forward", team: "Milwaukee Bucks", year: 2020 },
                { name: "Giannis Antetokounmpo", position: "Power Forward", team: "Milwaukee Bucks", year: 2019 },
                { name: "James Harden", position: "Shooting Guard", team: "Houston Rockets", year: 2018 },
                { name: "Russell Westbrook", position: "Point Guard", team: "Oklahoma City Thunder", year: 2017 },
                { name: "Stephen Curry", position: "Point Guard", team: "Golden State Warriors", year: 2016 },
                { name: "Stephen Curry", position: "Point Guard", team: "Golden State Warriors", year: 2015 }
            ],
            defaultColDef: {
                flex: 1,
                minWidth: 100,
                resizable: true
            }
        };
    }

    render() {
        return (
            <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    defaultColDef={this.state.defaultColDef}
                />
            </div>
        );
    }
}
