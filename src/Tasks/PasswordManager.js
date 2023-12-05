import './PasswordManager.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialPasswordsList = [];

const PasswordManager = () => {

    const [websiteName, setWebsite] = useState('')
    const onChangeWebsite = (event) => {
        setWebsite(event.target.value)
    }

    const [userName, setUserName] = useState('')
    const onChangeUsername = (event) => {
        setUserName(event.target.value)
    }

    const [userPassword, setUserPassword] = useState('')
    const onChangePassword = (event) => {
        setUserPassword(event.target.value)
    }

    const [passwordsList, setPasswordsList] = useState(initialPasswordsList);
    const [duplicatePasswordsList, setDuplicatePasswordsList] = useState(initialPasswordsList);

    let [count, setCount] = useState(0);
    const onSubmitUserData = (event) => {
        event.preventDefault();

        if (websiteName === '' || userName === '' || userPassword === '') {
            alert('Please enter valid data')
        }

        const newPassword = {
            id: uuidv4(),
            website: websiteName,
            username: userName,
            password: userPassword
        };
        setPasswordsList([...passwordsList, newPassword])
        setDuplicatePasswordsList([...passwordsList, newPassword])

        setCount(count += 1);
        setWebsite("")
        setUserName("")
        setUserPassword("")
    }

    const onClickDelete = (id) => {
        const filterResults = passwordsList.filter((eachUser) => eachUser.id !== id)
        setPasswordsList(filterResults)
        setCount(filterResults.length)
    }

    const [hidePassword, setHidePassword] = useState(true)
    const onClickCheckBox = () => {
        setHidePassword(!hidePassword)
    }

    const [search, setSearch] = useState('')
    const searchWebsites = (event) => {

        setSearch(event.target.value)

        const searchFilter = passwordsList.filter((eachSearch) => eachSearch.website.toLowerCase().includes(event.target.value.toLowerCase()));
        setPasswordsList(searchFilter);
        setCount(searchFilter.length)
        if (event.target.value === "") {
            setPasswordsList(duplicatePasswordsList)
            setCount(duplicatePasswordsList.length)
        }
    }


    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='password-manager-container'>

                <div className='my-3'>
                    <img className='password-manager-logo'
                        src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png' alt='app logo'>

                    </img>
                </div>

                <div className='new-password-container'>
                    <div className='add-new-password'>
                        <h5 className='text-light'>Add New Password</h5>

                        <form onSubmit={onSubmitUserData}>
                            <div class="input-group  inputs-container">
                                <img class="input-group-text  logos"
                                    src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png' alt='website'>

                                </img>
                                <input class="form-control" placeholder="Enter Website" onChange={onChangeWebsite} value={websiteName} />
                            </div>
                            <div class="input-group  inputs-container">
                                <img class="input-group-text  logos"
                                    src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png' alt='username'>

                                </img>
                                <input class="form-control" placeholder="Enter Username" onChange={onChangeUsername} value={userName} />
                            </div>
                            <div class="input-group  inputs-container">
                                <img class="input-group-text  logos"
                                    src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png' alt='password'>

                                </img>
                                <input type="password" class="form-control" placeholder="Enter Password" onChange={onChangePassword} value={userPassword} />
                            </div>
                            <div className='text-end'>
                                <button className='btn btn-primary' type='submit'>Add</button>
                            </div>
                        </form>

                    </div>
                    <div>
                        <img className='password-manager-image'
                            src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png' alt='password manager'>

                        </img>
                    </div>
                </div>


                <div className='passwords-history'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <h6 className='passwords-count'>Your Passwords <span className='count'>{count}</span></h6>
                        </div>
                        <div class="input-group w-25">
                            <img class="input-group-text  search-logo"
                                src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png' alt='search'>

                            </img>
                            <input type="text" class="form-control" placeholder="Search" onChange={(e) => searchWebsites(e)} />
                        </div>
                    </div>

                    <hr className='hr-line'></hr>

                    <div class="form-check d-flex justify-content-end">
                        <input class="form-check-input mx-2" type="checkbox" onClick={onClickCheckBox} />
                        <label class="form-check-label text-light">Show Passwords</label>
                    </div>

                    <div>
                        {count === 0 ?
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <img className='no-passwords-image'
                                    src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png' alt='no passwords'>
                                </img>
                                <h5 className='text-light'>No Passwords</h5>
                            </div> :
                            <div className='d-flex flex-wrap'>
                                {
                                    passwordsList.map((userData) => (
                                        <div className='users-data-list m-3'>
                                            <div>
                                                <div className='user-display-icon'>{userData.website.charAt(0).toUpperCase()}</div>
                                            </div>
                                            <div className='mx-3'>
                                                <div>{userData.website}</div>
                                                <div>{userData.username}</div>
                                                {hidePassword ?
                                                    <div>
                                                        <img className='stars-img img-fluid'
                                                            src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png' alt='stars'>
                                                        </img>
                                                    </div>
                                                    :
                                                    <div>{userData.password}</div>
                                                }
                                            </div>
                                            <div>
                                                <img className='delete-icon' onClick={() => onClickDelete(userData.id)}
                                                    src='https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png' alt='delete'>

                                                </img>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordManager;