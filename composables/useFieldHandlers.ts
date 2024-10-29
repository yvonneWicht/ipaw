import {computed, toRef} from 'vue';
import {useField} from 'vee-validate';

export const useFieldHandlers = (props, modes) => {
    const {meta, value, errorMessage, handleChange, handleBlur} = useField(
        toRef(props, 'name'),
        null,
        {
            validateOnValueUpdate: false,
        }
    );

    const handlers = computed(() => {
        const on = {
            blur: handleBlur,
            input: [(e) => handleChange(e, false)],
        };

        const triggers = modes[props.mode]({
            errorMessage,
            meta,
        });

        triggers.forEach((t) => {
            if (Array.isArray(on[t])) {
                on[t].push(handleChange);
            } else {
                on[t] = handleChange;
            }
        });
        return on;
    });

    return {
        meta,
        value,
        errorMessage,
        handlers,
    };
};
