import { Typography, CssBaseline, Grid, Stack, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';
import { FormContainer, TextFieldElement} from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Discount(props) {
    return (
        <FormContainer
            defaultValues={{ id: '', discount: '' }}
            onSuccess={data => props.postRequest('/Discount', data)}
        >
            <CssBaseline />
            <Grid container
                sx={{
                    boxShadow: 5,
                    width: '100%',
                    height: '60vh',
                    borderRadius: 3,
                    background: 'var(--bg-color)',
                    padding: 4,
                    color: 'var(--color)'
                }}
            >
                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
                    <Typography style={{ color: 'var(--desc-color)', widht: '100%' }} variant="h5" noWrap>
                        Please insert the student ID for discount
                    </Typography> 
                    <TextFieldElement
                        sx={{
                            margin: 5,
                            width: '80%',
                            border: '1px solid var(--desc-color)',
                            borderRadius: '5px',
                            label: { color: 'var(--desc-color)' },
                        }}
                        name="year" label="Please Enter student ID in here" required
                         />
                </Grid>
                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
                    <Typography style={{ color: 'var(--desc-color)', width: '100%' }} variant="h5" noWrap>
                        Please insert the discount records.
                    </Typography>
                    <FormControl fullWidth sx={{ margin: 5 }}>
                        <InputLabel id="discount-id-label">Discount</InputLabel>
                        <Select
                            labelId="discount-label"
                            id="discount"
                            name="discount"
                            label="discount"
                            required
                        >
                            <MenuItem value={10}>Ten %</MenuItem>
                            <MenuItem value={20}>Twenty %</MenuItem>
                            <MenuItem value={30}>Thirty %</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                </Grid>
                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
                    <Stack sx={{ marginTop: '2%' }} direction="row" spacing={2}>
                        <Button type="submit" variant="outlined" sx={{ fontSize: '22px' }} color="success">
                            <AddCircleOutlineIcon sx={{ marginRight: '2%' }} />
                            Add
                        </Button>
                        <Button variant="outlined" color="error">
                            <CancelIcon sx={{ marginRight: '2%' }} />
                            Cancel
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </FormContainer>
    );
}