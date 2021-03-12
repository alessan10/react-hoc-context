import React, { useCallback, useContext, useEffect } from 'react';
import { useTable } from 'react-table'
import {COLUMNS} from './columns'
import { useMemo } from 'react';
import { Context } from './HighOrderComponent';
import { getPokemon } from '../service'
import { fetchPokemonList, setPokemonList } from '../redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../redux/selectors'


const BasicTable = (props) =>{

    //const {setPokemonList, pokemonList, fetchPokemonList} = props //destrutturazione di props

    //prima della chiamata di useTable 
    //const columns = useMemo (() => COLUMNS, []) //arrow function che ritorna le colonne e un array vuoto
    //const data = useMemo (() => MOCK_DATA, []) // stessa cosa, ritorna MOCK_DATA e un empty dependency array
    //const {value:{pokemon, pokemonList}, setPokemonList}  = useContext(Context); //dentro value stiamo facendo la destrutturazione
    
    const {pokemonList} = useSelector ( (state) => {
        return {
            pokemonList: getPokemonList(state)
        }
    })

    const dispatch = useDispatch();

    const getList = useCallback(  async () =>{
        // const promise = await getPokemon();
        // const response = await promise.json();
        // promise.ok && setPokemonList(response.results)
        dispatch(fetchPokemonList());
    }
   , [])

    useEffect(() => { //use effect 
   
        getList()
    }, [getList])//per ora non mettiamo dipendenze perchè non dobbiamo aggiornare nessun contenuto e quello che abbiamo ce lo da il didMount

    
    // const tableInstance = useTable({
    //     /*columns: columns,
    //     data: data*/
    //     //questo può essere semplificato grazie alla sintassi es6 in:
        
    //     columns,
    //     pokemonList,
    // })
    
    //use table ritorna una table instance che memorizziamo in una costante

    // const { 
    //     getTableProps, 
    //     getTableBodyProps, 
    //     headerGroups, 
    //     rows, 
    //     prepareRow 
    // } = tableInstance    

    return (

        <ul>
            {pokemonList?.map((entries) => {
                return (<li key={entries.name}>
                    {entries.name}
                    {entries.url}
                </li>)
                
            })}
        </ul>
        // <table {...getTableProps()}>
        //     <thead>
        //         {
        //             headerGroups.map(headerGroup => (
        //                 <tr {...headerGroup.getHeaderGroupProps()}> 
        //                 {
        //                     headerGroup.headers.map((column) => (
        //                         <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        //                     ))
        //                 }
                            
        //                 </tr>
        //             ))
        //         }
                
        //     </thead>

        //     <tbody {...getTableBodyProps()}>
        //         {
        //             rows.map(row => {
        //                 prepareRow(row)
        //                 return (
        //                     <tr {...row.getRowProps()}>
        //                         {
        //                             row.cells.map((cell) =>{
        //                                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
        //                             })
        //                         }
                               
        //                     </tr>
        //                 )
        //             })
        //         }
                
        //     </tbody>
        // </table>
    )
}
export default BasicTable;

// //lo state è lo store quindi avrà tutte le sue proprietà
// const mapStateToProps = (state) => {
//     return {
//         pokemonList: getPokemonList(state) //invece di state.pokemonList
//     }
// }
// //prendo il contenuto dello store e lo ritorna come oggetto che viene aggiunto alle props

// //dispatch è un metodo serve per mandare le info al reducer
// const mapDispatchToProps = dispatch => {
//     return {
//         fetchPokemonList: () => dispatch(fetchPokemonList()),
//         setPokemonList : (pokemonList) => dispatch(setPokemonList(pokemonList))
//     }
// }

// //connect torna lo state(dove ci sarà lo store)
// export default connect(mapStateToProps,mapDispatchToProps)(BasicTable);
//TUTTO QUESTO SI PUò SOSTITUIRE CON UN HOOK: useSelector e useDispatch a riga 21

