import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { setFtp } from '../../action/task/ftp';

const FTP = ({ ftp, setFtp }) => (
  <div className="setting-mod_item">
    <h3 className="setting-mod_title">FTP设置</h3>
    <div className="setting-mod_bd">
      {
        ftp.map((btn, i) => (
          <TextField
            key={i}
            className="text-field"
            hintText={btn.get('name')}
            defaultValue={btn.get('value').trim()}
            floatingLabelText={btn.get('label')}
            onBlur={(e) => {
              const value = e.target.value.trim();
              if (value) {
                setFtp(i, value);
              }
            }}
            type={btn.get('name') === 'Password' ? 'password' : 'text'}
            errorText={btn.get('value') ? '' : '此表单必须填写'}
          />
        ))
      }
    </div>
  </div>
);

const mapStateToProps = states => ({
  ftp: states.setting.get('ftp')
});

const mapDispatchToProps = dispatch => ({
  setFtp: (index, value) => dispatch(setFtp(index, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FTP);
