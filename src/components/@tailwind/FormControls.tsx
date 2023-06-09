import React, { useId } from 'react';
import { useForm, Controller, Control, FieldValues } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types';

interface IFormControlProps {
	type?: string;
	label?: string;
	options?: Array<{ [key: string]: any }>;
	control: Control<FieldValues, any>;
	name: string;
	disabled?: boolean;
	rules?: Pick<RegisterOptions<FieldValues>, 'maxLength' | 'minLength' | 'validate' | 'required'>;
	[key: string]: any;
}

export const TextFieldControl = (props: IFormControlProps) => {
	const id = useId();
	return (
		<Controller
			control={props.control}
			name={props.name}
			render={({ field: { onChange, onBlur, value, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState }) => (
				<div className='form-control'>
					<label htmlFor={id}>{props.label ?? ''}</label>
					<input
						type={props.type}
						className='input-bordered input sm:input-sm'
						onChange={onChange}
						id={id}
						disabled={props.disabled}
						defaultValue={value}
						placeholder={props.placeholder}
						min={props.min}
					/>
					{error && <small className='font-medium text-error'>{error.message}</small>}
				</div>
			)}
			rules={props.rules}
		/>
	);
};
export const LongTextFieldControl = (props: IFormControlProps) => {
	const id = useId();
	return (
		<Controller
			control={props.control}
			name={props.name}
			render={({ field: { onChange, onBlur, value, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState }) => (
				<div className='form-control'>
					<label htmlFor={id}>{props.label ?? ''}</label>
					<textarea
						className='textarea-bordered textarea sm:textarea-sm'
						onChange={onChange}
						id={id}
						defaultValue={value}
						placeholder={props.placeholder}></textarea>
					{error && <small className='font-medium text-error'>{error.message}</small>}
				</div>
			)}
			rules={props.rules}
		/>
	);
};

export const SelectFieldControl = (props: IFormControlProps) => {
	const id = useId();
	return (
		<Controller
			control={props.control}
			name={props.name}
			render={({ field: { onChange, onBlur, value, ref }, fieldState: { invalid, isTouched, isDirty, error }, formState }) => {
				return (
					<div className='form-control'>
						<label htmlFor={id}>{props.label ?? ''}</label>
						<select
							className='select-bordered select sm:select-sm'
							onChange={onChange}
							id={id}
							disabled={props.disabled}
							defaultValue={value}
							placeholder={props.placeholder}>
							<option>Select</option>
							{props.render()}
						</select>
						{error && <small className='font-medium text-error'>{error.message}</small>}
					</div>
				);
			}}
			rules={props.rules}
		/>
	);
};
