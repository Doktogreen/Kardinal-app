import React, { useState } from 'react';
import { createBrowserHistory } from 'history';
import { PasswordChange } from '../../actions';

let history = createBrowserHistory();
export default function ChangePassword(){
    const [old_password, setOld_password] = useState("");
    const [new_password1, setNew_password1] = useState("");
    const [new_password2, setNew_password2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            old_password: old_password,
            new_password1: new_password1,
            new_password2: new_password1
        }
        return PasswordChange(data).then((res) => {
            return history.push('/setting');
        })
    }

    return(
        <div className="widget-content widget-content-area ">
            <form onSubmit={e => handleSubmit(e)}>
                <div className="row" tyle={{padding: "0px 20px"}}>
                    <div className="col-md-6">
                        <h5>Change Password</h5>
                        <p>Password must be 8 characters long</p>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group mb-4">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="old_password"
                                name='old_password'
                                value={old_password}
                                required
                                onChange={e => setOld_password(e.target.value)}
                                placeholder="Current Password *" 
                            />
                        </div>
                        <div className="form-group mb-4">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="new_password1"
                                name='new_password1'
                                value={new_password1}
                                required
                                onChange={e => setNew_password1(e.target.value)} 
                                placeholder="New Password *" 
                                
                            />   
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                id="new_password2"
                                name='new_password2'
                                value={new_password2}
                                required
                                onChange={e => setNew_password2(e.target.value)} 
                                placeholder="Confirm Password *" 
                                
                            />
                            <small id="emailHelp2" className="form-text text-muted">Password must be 8 characters long</small>
                        </div>
                    </div>
                </div>
                <div className="mb-3" style={{padding: "0 20px", textAlign: "right"}}>
                    <button type="submit" className="btn btn-primary mt-3">Change Password</button>
                </div>  
            </form>
        </div>    
    )
}