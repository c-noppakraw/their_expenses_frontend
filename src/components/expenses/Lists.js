import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addListExpensives, getListExpensives, removeListExpensives } from '../../actions';

const List = () => {

    const listsEx = useSelector((state) => state.listsExpenses);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addListExpensives(description, amount, month, year), [dispatch]);
        setDescription('');
        setAmount('');
        setMonth('');
        setYear('');
        window.location.replace('/');
    }

    const getEx = (id) => {
        dispatch(getListExpensives(id), [dispatch]);
    }

    const removeEx = (id) => {
        dispatch(removeListExpensives(id), [dispatch]);
        window.location.replace('/');
    }

    const dataEx = listsEx.map((value, index) => (
        <tr key={value._id}>
            <td className="text-center">{index + 1}</td>
            <td>{value.description}</td>
            <td>{value.month}</td>
            <td className="text-center">{value.year}</td>
            <td className="text-center">{value.amount}</td>
            <td className="text-center">
                <button
                        className="btn btn-warning"
                        type="button"
                        onClick={() => getEx(value._id)}
                    >
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
            </td>
            <td className="text-center">
                <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => removeEx(value._id)}
                    >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
        </tr>
    ));

    return (
        <>
            <div className="container" style={{ marginTop: '20px', marginBottom: '80px' }}>
                <div className="row">
                    <div className="col-12">
                        <div className="mt-5 mb-5">
                            <h4>List Expensive</h4>
                            <div className="row mt-5 mb-5">
                                <div className="col-2" style={{ borderRight: '1px solid #343a40' }}>
                                    <div className="mt-4">
                                        <p>Expensive:</p>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <form className="mt-3" onSubmit={e => handleSubmit(e)}>
                                        <div className="form-row">
                                            <div className="form-group col-4">
                                                <input type="text" className="form-control" 
                                                id="description" name="description" placeholder="Description" 
                                                value={description} onChange={e => setDescription(e.target.value)} />
                                            </div>
                                            <div className="form-group col-2">
                                                <input type="text" className="form-control" 
                                                id="amount" name="amount" placeholder="Amount" 
                                                value={amount} onChange={e => setAmount(e.target.value)} />
                                            </div>
                                            <div className="form-group col-2">
                                                <input type="text" className="form-control" 
                                                id="month" name="month" placeholder="Month" 
                                                value={month} onChange={e => setMonth(e.target.value)} />
                                            </div>
                                            <div className="form-group col-2">
                                                <input type="text" className="form-control" 
                                                id="year" name="year" placeholder="Year" 
                                                value={year} onChange={e => setYear(e.target.value)}  />
                                            </div>
                                            <div className="form-group col-2">
                                                <button type="submit" className="btn btn-success btn-block">SAVE</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive-lg">
                            <table className="table table-hover table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center">ลำดับ</th>
                                        <th>รายการ</th>
                                        <th>เดือน</th>
                                        <th className="text-center">ปี</th>
                                        <th className="text-center">ราคา</th>
                                        <th className="text-center">แก้ไข</th>
                                        <th className="text-center">ลบ</th>
                                    </tr>
                                </thead>
                                <tbody>{dataEx}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;