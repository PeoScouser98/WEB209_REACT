import React, { useId } from 'react';
import { useForm, Controller, Control, FieldValues } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types';

type Props = {
	type: string;
	label?: string;
	control: Control<FieldValues, any>;
	name: string;
	rules?: Pick<RegisterOptions<FieldValues>, 'maxLength' | 'minLength' | 'validate' | 'required'>;
	[key: string]: any;
};

export const TextFieldControl = (props: Props) => {
	const id = useId();
	return (
		<Controller
			control={props.control}
			name={props.name}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { invalid, isTouched, isDirty, error },
				formState,
			}) => (
				<div className='form-control'>
					<label htmlFor={id}>{props.label ?? ''}</label>
					<input type={props.type} className='input-bordered input input-sm' onChange={onChange} id={id} />
					{error && <small className='font-medium text-error'>{error.message}</small>}
				</div>
			)}
			rules={props.rules}
		/>
	);
};
