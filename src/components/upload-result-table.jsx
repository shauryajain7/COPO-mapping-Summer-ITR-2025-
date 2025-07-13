import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
} from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download'; // Optional: install this or remove

export default function ResultUploadTable({ markTypes }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const columns = [
    { id: 'type', label: 'Marks Type', minWidth: 150 },
    { id: 'uploadedBy', label: 'Uploaded By', minWidth: 150 },
    { id: 'uploadedDate', label: 'Uploaded Date', minWidth: 150 },
    { id: 'download', label: 'Download', minWidth: 100, align: 'center' },
  ];

  const rows = markTypes.map((type) => ({
    type,
    uploadedBy: '',
    uploadedDate: '',
    download: '',
  }));

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="result upload table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.uploadedBy}</TableCell>
                  <TableCell>{row.uploadedDate}</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" color="primary">
                      <DownloadIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
