import styles from "./CreateForm.module.css"

const CreateForm = () => {
    return (
        <div className={styles.createForm}>
            <div className={styles.imgAdd}>
                <img src="" alt="" />
            </div>
            <div>
                <label htmlFor="">Title</label>
                <input type="text" name="" id="" /> 

                <label htmlFor="">Description</label>
                <input type="text" />
            </div>

            <div>
                <button>Save</button>
            </div>
        </div>
    );
}

export default CreateForm;