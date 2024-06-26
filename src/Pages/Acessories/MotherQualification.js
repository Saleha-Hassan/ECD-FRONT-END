import { Typography, CssBaseline, Divider, Grid, Stack } from '@mui/material'
import React from 'react'
import { ThemeProvider } from '@mui/system';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

export default function MotherQualification(props) {
    return (
        <FormContainer
            defaultValues={{ MotherQualification: '' }}
            onSuccess={data => props.postRequest('/MotherQualification', data)}>
            <CssBaseline />
            <Grid container
                   sx={{
                    boxShadow: 5,
                    width: '80%',
                    height: '80%',
                    margin: '0 10%',
                    borderRadius: 3,
                    background: 'var(--bg-color)',
                    padding: 4,
                    color: 'var(--color)'
                    // '&:hover': {
                    //   bgcolor: 'primary.dark',
                    // },
                }}
            >
                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
                    <Typography style={{ color: 'var(--desc-color)', widht: '100%' }} variant="h5" noWrap>
                        Please inter your MotherQualification.
                    </Typography>
                    <TextFieldElement
                        sx={{
                            margin: 5,
                            width: '80%',
                            border: '1px solid var(--desc-color)',
                            borderRadius: '5px',
                            label: { color: 'var(--desc-color)' },
                        }}
                        name="MotherQualification" label="Please Enter MotherQualification in here" required
                         />
                </Grid>

                <Grid item lg={6} xl={6} xs={12} sm={12} md={6}>
                    <Stack sx={{ marginTop: '8%' }} direction="row" spacing={2}>
                        <Button  type="submit" variant="outlined" sx={{ fontSize: '22px' }} color="success">
                            <AddCircleOutlineIcon sx={{ marginRight: '2%' }} />
                            Add
                        </Button>
                        <Button variant="outlined" color="error">
                            <CancelIcon sx={{ marginRight: '2%' }} />
                            Error
                        </Button>
                    </Stack>
                </Grid>
            </Grid>

        </FormContainer>
    )
}
